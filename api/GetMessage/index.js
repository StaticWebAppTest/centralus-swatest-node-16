module.exports = async function (context, req) {
  const date = "2024-09-10T03:13:13.927Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

