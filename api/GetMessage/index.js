module.exports = async function (context, req) {
  const date = "2024-03-19T23:09:29.971Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

