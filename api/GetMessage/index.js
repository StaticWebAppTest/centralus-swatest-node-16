module.exports = async function (context, req) {
  const date = "2022-05-11T22:10:47.927Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

