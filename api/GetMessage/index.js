module.exports = async function (context, req) {
  const date = "2023-11-30T12:17:22.957Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

