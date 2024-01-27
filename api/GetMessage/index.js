module.exports = async function (context, req) {
  const date = "2024-01-27T18:09:49.985Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

