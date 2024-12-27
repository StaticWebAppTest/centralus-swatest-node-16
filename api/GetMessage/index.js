module.exports = async function (context, req) {
  const date = "2024-12-27T05:11:26.797Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

