module.exports = async function (context, req) {
  const date = "2024-06-29T18:12:22.094Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

