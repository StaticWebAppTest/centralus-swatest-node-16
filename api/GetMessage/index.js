module.exports = async function (context, req) {
  const date = "2024-09-15T09:10:34.727Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

