module.exports = async function (context, req) {
  const date = "2024-01-24T18:12:22.373Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

