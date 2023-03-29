module.exports = async function (context, req) {
  const date = "2023-03-29T18:18:42.054Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

