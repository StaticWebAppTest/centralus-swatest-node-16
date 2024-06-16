module.exports = async function (context, req) {
  const date = "2024-06-16T19:09:34.560Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

