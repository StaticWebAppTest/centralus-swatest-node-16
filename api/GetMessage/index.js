module.exports = async function (context, req) {
  const date = "2023-10-15T12:15:11.643Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

