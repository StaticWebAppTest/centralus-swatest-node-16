module.exports = async function (context, req) {
  const date = "2024-05-21T16:11:44.927Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

