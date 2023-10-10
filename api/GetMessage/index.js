module.exports = async function (context, req) {
  const date = "2023-10-10T12:17:04.305Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

