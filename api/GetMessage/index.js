module.exports = async function (context, req) {
  const date = "2024-12-15T16:13:33.919Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

