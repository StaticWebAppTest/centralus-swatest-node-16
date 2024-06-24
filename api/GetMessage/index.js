module.exports = async function (context, req) {
  const date = "2024-06-24T18:13:26.916Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

