module.exports = async function (context, req) {
  const date = "2022-04-24T12:17:03.224Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

