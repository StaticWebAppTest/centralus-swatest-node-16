module.exports = async function (context, req) {
  const date = "2025-02-18T09:12:47.452Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

