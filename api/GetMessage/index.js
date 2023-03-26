module.exports = async function (context, req) {
  const date = "2023-03-26T23:08:42.927Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

