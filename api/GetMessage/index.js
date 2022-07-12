module.exports = async function (context, req) {
  const date = "2022-07-12T21:09:31.898Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

