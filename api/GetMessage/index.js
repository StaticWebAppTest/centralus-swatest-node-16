module.exports = async function (context, req) {
  const date = "2024-08-29T15:12:25.971Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

