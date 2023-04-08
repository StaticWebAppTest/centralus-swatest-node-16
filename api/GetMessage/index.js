module.exports = async function (context, req) {
  const date = "2023-04-08T05:07:47.890Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

