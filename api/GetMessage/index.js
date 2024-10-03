module.exports = async function (context, req) {
  const date = "2024-10-03T20:12:29.373Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

