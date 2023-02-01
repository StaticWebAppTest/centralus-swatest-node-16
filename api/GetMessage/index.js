module.exports = async function (context, req) {
  const date = "2023-02-01T20:10:24.013Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

