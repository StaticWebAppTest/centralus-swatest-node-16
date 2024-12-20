module.exports = async function (context, req) {
  const date = "2024-12-20T18:15:38.559Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

