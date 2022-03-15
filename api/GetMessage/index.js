module.exports = async function (context, req) {
  const date = "2022-03-15T03:11:48.150Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

