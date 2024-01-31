module.exports = async function (context, req) {
  const date = "2024-01-31T18:09:01.347Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

