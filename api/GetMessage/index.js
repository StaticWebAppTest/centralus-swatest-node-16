module.exports = async function (context, req) {
  const date = "2024-11-18T01:01:09.746Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

