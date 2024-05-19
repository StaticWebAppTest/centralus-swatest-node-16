module.exports = async function (context, req) {
  const date = "2024-05-19T23:10:58.013Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

