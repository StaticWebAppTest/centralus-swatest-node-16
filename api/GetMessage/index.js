module.exports = async function (context, req) {
  const date = "2022-04-06T11:09:31.898Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

