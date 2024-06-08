module.exports = async function (context, req) {
  const date = "2024-06-08T08:11:37.155Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

