module.exports = async function (context, req) {
  const date = "2024-06-17T22:09:06.660Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

