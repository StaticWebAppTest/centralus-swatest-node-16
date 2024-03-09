module.exports = async function (context, req) {
  const date = "2024-03-09T21:09:05.417Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

