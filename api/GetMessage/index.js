module.exports = async function (context, req) {
  const date = "2023-09-01T12:15:47.458Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

