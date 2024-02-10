module.exports = async function (context, req) {
  const date = "2024-02-10T02:12:46.927Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

