module.exports = async function (context, req) {
  const date = "2025-06-06T15:11:28.452Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

