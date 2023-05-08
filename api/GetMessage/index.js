module.exports = async function (context, req) {
  const date = "2023-05-08T16:11:26.177Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

