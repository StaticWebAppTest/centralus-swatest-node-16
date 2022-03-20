module.exports = async function (context, req) {
  const date = "2022-03-20T13:14:09.746Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

