module.exports = async function (context, req) {
  const date = "2022-11-03T21:10:04.113Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

