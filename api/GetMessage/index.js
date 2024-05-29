module.exports = async function (context, req) {
  const date = "2024-05-29T16:12:38.677Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

