module.exports = async function (context, req) {
  const date = "2024-05-20T10:10:32.388Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

