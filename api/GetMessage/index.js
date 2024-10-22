module.exports = async function (context, req) {
  const date = "2024-10-22T18:15:47.191Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

