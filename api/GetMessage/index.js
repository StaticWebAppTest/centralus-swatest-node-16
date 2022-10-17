module.exports = async function (context, req) {
  const date = "2022-10-17T12:29:54.309Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

