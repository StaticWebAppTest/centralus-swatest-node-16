module.exports = async function (context, req) {
  const date = "2024-09-11T18:14:51.013Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

