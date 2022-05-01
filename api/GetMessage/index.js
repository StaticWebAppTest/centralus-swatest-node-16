module.exports = async function (context, req) {
  const date = "2022-05-01T17:16:59.013Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

