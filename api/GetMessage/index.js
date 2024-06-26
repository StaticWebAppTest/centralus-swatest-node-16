module.exports = async function (context, req) {
  const date = "2024-06-26T16:13:11.457Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

