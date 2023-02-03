module.exports = async function (context, req) {
  const date = "2023-02-03T21:08:17.052Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

