module.exports = async function (context, req) {
  const date = "2022-04-04T03:31:21.890Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

