module.exports = async function (context, req) {
  const date = "2023-11-18T12:15:09.076Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

