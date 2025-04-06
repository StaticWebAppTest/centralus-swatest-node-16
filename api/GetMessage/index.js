module.exports = async function (context, req) {
  const date = "2025-04-06T07:11:25.406Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

