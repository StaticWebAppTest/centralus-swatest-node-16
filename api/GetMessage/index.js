module.exports = async function (context, req) {
  const date = "2022-08-01T03:59:30.470Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

