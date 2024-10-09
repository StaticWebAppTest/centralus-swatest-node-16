module.exports = async function (context, req) {
  const date = "2024-10-09T10:12:48.761Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

