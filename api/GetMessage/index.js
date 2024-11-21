module.exports = async function (context, req) {
  const date = "2024-11-21T15:12:51.927Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

