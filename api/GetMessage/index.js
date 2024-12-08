module.exports = async function (context, req) {
  const date = "2024-12-08T05:12:03.288Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

