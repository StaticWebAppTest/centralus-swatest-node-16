module.exports = async function (context, req) {
  const date = "2024-06-08T02:26:30.116Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

