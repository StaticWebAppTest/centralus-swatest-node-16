module.exports = async function (context, req) {
  const date = "2024-07-11T00:49:50.746Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

