module.exports = async function (context, req) {
  const date = "2025-06-27T07:14:16.706Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

