module.exports = async function (context, req) {
  const date = "2024-03-15T18:12:33.636Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

