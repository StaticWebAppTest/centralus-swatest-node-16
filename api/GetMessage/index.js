module.exports = async function (context, req) {
  const date = "2024-09-19T11:09:48.746Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

