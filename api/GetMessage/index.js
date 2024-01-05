module.exports = async function (context, req) {
  const date = "2024-01-05T06:12:31.109Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

