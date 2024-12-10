module.exports = async function (context, req) {
  const date = "2024-12-10T10:14:16.927Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

