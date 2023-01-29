module.exports = async function (context, req) {
  const date = "2023-01-29T18:10:44.224Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

