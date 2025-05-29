module.exports = async function (context, req) {
  const date = "2025-05-29T21:12:38.280Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

