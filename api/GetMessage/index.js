module.exports = async function (context, req) {
  const date = "2025-12-18T11:13:46.959Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

