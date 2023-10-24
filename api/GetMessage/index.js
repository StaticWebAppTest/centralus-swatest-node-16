module.exports = async function (context, req) {
  const date = "2023-10-24T20:09:26.643Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

