module.exports = async function (context, req) {
  const date = "2023-03-30T03:10:10.927Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

