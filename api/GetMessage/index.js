module.exports = async function (context, req) {
  const date = "2022-05-02T03:21:14.453Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

