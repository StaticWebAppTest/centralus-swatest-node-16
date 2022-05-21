module.exports = async function (context, req) {
  const date = "2022-05-21T18:12:37.746Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

