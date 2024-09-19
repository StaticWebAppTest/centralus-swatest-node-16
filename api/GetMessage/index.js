module.exports = async function (context, req) {
  const date = "2024-09-19T16:13:46.388Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

