module.exports = async function (context, req) {
  const date = "2022-10-09T03:59:36.567Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

