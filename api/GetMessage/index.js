module.exports = async function (context, req) {
  const date = "2022-11-17T10:11:22.890Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

