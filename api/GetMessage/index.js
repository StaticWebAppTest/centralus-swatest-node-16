module.exports = async function (context, req) {
  const date = "2023-10-01T07:07:29.013Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

