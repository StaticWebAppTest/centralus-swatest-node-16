module.exports = async function (context, req) {
  const date = "2024-01-14T14:07:56.971Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

