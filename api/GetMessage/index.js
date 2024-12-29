module.exports = async function (context, req) {
  const date = "2024-12-29T18:14:22.906Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

