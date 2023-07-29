module.exports = async function (context, req) {
  const date = "2023-07-29T05:07:44.927Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

