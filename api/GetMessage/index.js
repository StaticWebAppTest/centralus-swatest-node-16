module.exports = async function (context, req) {
  const date = "2023-02-09T06:12:50.953Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

