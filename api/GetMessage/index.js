module.exports = async function (context, req) {
  const date = "2022-12-22T05:08:52.429Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

