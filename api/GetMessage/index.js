module.exports = async function (context, req) {
  const date = "2023-05-05T09:08:38.071Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

