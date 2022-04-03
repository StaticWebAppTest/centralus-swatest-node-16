module.exports = async function (context, req) {
  const date = "2022-04-03T08:12:02.839Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

