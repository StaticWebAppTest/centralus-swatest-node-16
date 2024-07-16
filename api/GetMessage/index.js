module.exports = async function (context, req) {
  const date = "2024-07-16T03:14:34.560Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

