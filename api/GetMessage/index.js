module.exports = async function (context, req) {
  const date = "2025-03-07T21:10:02.388Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

