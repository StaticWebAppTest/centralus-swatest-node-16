module.exports = async function (context, req) {
  const date = "2025-05-18T17:10:31.388Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

