module.exports = async function (context, req) {
  const date = "2023-12-08T21:08:19.890Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

