module.exports = async function (context, req) {
  const date = "2022-07-07T10:11:50.746Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

