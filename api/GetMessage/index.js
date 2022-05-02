module.exports = async function (context, req) {
  const date = "2022-05-02T12:20:54.746Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

