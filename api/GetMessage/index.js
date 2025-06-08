module.exports = async function (context, req) {
  const date = "2025-06-08T11:10:25.452Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

