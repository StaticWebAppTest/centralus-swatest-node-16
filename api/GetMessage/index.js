module.exports = async function (context, req) {
  const date = "2023-11-08T00:41:29.774Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

