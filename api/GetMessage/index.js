module.exports = async function (context, req) {
  const date = "2025-12-22T14:15:09.452Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

