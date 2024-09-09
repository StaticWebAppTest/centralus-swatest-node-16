module.exports = async function (context, req) {
  const date = "2024-09-09T07:11:22.746Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

