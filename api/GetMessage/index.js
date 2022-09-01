module.exports = async function (context, req) {
  const date = "2022-09-01T06:22:54.746Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

