module.exports = async function (context, req) {
  const date = "2023-10-01T22:07:27.140Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

