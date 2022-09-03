module.exports = async function (context, req) {
  const date = "2022-09-03T10:12:05.069Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

