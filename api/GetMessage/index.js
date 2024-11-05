module.exports = async function (context, req) {
  const date = "2024-11-05T09:12:27.403Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

