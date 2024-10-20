module.exports = async function (context, req) {
  const date = "2024-10-20T21:10:31.155Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

