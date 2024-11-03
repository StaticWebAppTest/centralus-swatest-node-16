module.exports = async function (context, req) {
  const date = "2024-11-03T16:13:15.754Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

