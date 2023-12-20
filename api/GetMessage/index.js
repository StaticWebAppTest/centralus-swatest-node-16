module.exports = async function (context, req) {
  const date = "2023-12-20T14:07:10.927Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

