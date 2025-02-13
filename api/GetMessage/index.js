module.exports = async function (context, req) {
  const date = "2025-02-13T23:11:12.130Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

