module.exports = async function (context, req) {
  const date = "2024-05-17T16:11:25.965Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

