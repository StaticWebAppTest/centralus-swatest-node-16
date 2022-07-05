module.exports = async function (context, req) {
  const date = "2022-07-05T07:10:10.746Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

