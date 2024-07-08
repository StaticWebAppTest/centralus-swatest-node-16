module.exports = async function (context, req) {
  const date = "2024-07-08T19:07:47.308Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

