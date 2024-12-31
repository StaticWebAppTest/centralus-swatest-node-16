module.exports = async function (context, req) {
  const date = "2024-12-31T09:12:07.071Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

