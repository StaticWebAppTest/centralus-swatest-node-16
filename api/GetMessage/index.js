module.exports = async function (context, req) {
  const date = "2024-03-05T12:16:01.388Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

