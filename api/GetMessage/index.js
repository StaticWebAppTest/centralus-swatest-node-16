module.exports = async function (context, req) {
  const date = "2023-09-26T17:08:01.457Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

