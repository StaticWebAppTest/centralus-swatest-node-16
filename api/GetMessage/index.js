module.exports = async function (context, req) {
  const date = "2025-02-05T11:09:32.388Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

