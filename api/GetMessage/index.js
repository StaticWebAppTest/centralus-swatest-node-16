module.exports = async function (context, req) {
  const date = "2024-07-03T21:10:22.054Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

