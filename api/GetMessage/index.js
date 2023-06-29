module.exports = async function (context, req) {
  const date = "2023-06-29T18:15:43.642Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

