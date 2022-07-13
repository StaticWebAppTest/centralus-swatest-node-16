module.exports = async function (context, req) {
  const date = "2022-07-13T14:22:21.927Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

