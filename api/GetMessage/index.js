module.exports = async function (context, req) {
  const date = "2023-01-14T12:15:42.013Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

