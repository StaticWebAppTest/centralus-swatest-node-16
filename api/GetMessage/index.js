module.exports = async function (context, req) {
  const date = "2024-12-25T12:21:36.921Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

