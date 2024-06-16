module.exports = async function (context, req) {
  const date = "2024-06-16T17:08:26.054Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

