module.exports = async function (context, req) {
  const date = "2024-05-29T18:12:29.672Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

