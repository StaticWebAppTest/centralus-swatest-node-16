module.exports = async function (context, req) {
  const date = "2022-07-08T03:38:47.072Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

