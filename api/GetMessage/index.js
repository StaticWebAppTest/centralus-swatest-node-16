module.exports = async function (context, req) {
  const date = "2025-04-08T11:10:50.071Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

