module.exports = async function (context, req) {
  const date = "2023-01-29T17:08:05.054Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

