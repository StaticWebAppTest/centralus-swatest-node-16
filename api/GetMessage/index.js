module.exports = async function (context, req) {
  const date = "2024-06-29T16:12:08.882Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

