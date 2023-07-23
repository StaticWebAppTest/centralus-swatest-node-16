module.exports = async function (context, req) {
  const date = "2023-07-23T20:08:37.746Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

