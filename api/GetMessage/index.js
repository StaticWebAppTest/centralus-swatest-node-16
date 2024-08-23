module.exports = async function (context, req) {
  const date = "2024-08-23T03:11:49.726Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

