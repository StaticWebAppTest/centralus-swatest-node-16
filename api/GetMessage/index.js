module.exports = async function (context, req) {
  const date = "2024-05-13T10:10:41.397Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

