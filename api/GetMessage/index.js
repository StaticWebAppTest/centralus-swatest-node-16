module.exports = async function (context, req) {
  const date = "2022-11-29T09:10:26.641Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

