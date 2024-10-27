module.exports = async function (context, req) {
  const date = "2024-10-27T02:51:11.198Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

