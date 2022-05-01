module.exports = async function (context, req) {
  const date = "2022-05-01T03:36:36.274Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

