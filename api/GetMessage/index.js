module.exports = async function (context, req) {
  const date = "2024-11-08T11:09:34.302Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

