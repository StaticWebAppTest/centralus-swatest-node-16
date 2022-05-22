module.exports = async function (context, req) {
  const date = "2022-05-22T18:12:43.113Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

