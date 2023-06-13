module.exports = async function (context, req) {
  const date = "2023-06-13T05:08:31.457Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

