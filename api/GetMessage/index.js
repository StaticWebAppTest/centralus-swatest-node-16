module.exports = async function (context, req) {
  const date = "2023-04-25T05:08:47.927Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

