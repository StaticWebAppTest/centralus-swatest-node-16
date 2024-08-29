module.exports = async function (context, req) {
  const date = "2024-08-29T18:14:27.001Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

