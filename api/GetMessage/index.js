module.exports = async function (context, req) {
  const date = "2022-05-06T11:09:33.456Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

