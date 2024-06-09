module.exports = async function (context, req) {
  const date = "2024-06-09T20:10:33.095Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

