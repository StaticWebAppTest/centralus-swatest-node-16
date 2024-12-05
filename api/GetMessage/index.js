module.exports = async function (context, req) {
  const date = "2024-12-05T07:12:24.621Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

