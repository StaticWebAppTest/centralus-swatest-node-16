module.exports = async function (context, req) {
  const date = "2022-12-01T21:08:10.113Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

