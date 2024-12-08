module.exports = async function (context, req) {
  const date = "2024-12-08T21:10:31.373Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

