module.exports = async function (context, req) {
  const date = "2022-09-30T12:28:41.668Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

