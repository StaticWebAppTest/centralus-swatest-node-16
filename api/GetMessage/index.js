module.exports = async function (context, req) {
  const date = "2024-12-03T20:14:13.131Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

