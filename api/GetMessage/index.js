module.exports = async function (context, req) {
  const date = "2025-06-25T13:29:40.388Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

