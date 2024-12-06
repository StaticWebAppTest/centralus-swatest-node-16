module.exports = async function (context, req) {
  const date = "2024-12-06T17:11:24.457Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

