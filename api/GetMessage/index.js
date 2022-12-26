module.exports = async function (context, req) {
  const date = "2022-12-26T03:10:44.629Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

