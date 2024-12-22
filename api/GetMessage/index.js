module.exports = async function (context, req) {
  const date = "2024-12-22T15:10:10.797Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

