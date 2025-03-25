module.exports = async function (context, req) {
  const date = "2025-03-25T02:55:07.921Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

