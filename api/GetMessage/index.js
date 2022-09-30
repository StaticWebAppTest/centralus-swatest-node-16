module.exports = async function (context, req) {
  const date = "2022-09-30T10:14:49.457Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

