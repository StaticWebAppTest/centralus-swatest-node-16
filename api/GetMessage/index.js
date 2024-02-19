module.exports = async function (context, req) {
  const date = "2024-02-19T12:16:22.823Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

