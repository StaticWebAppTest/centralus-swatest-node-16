module.exports = async function (context, req) {
  const date = "2023-06-21T02:06:56.155Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

