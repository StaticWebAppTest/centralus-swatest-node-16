module.exports = async function (context, req) {
  const date = "2024-08-03T02:32:53.406Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

