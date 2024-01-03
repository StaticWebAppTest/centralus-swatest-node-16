module.exports = async function (context, req) {
  const date = "2024-01-03T06:12:22.388Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

