module.exports = async function (context, req) {
  const date = "2023-11-08T03:09:34.457Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

