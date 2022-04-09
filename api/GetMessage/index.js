module.exports = async function (context, req) {
  const date = "2022-04-09T11:08:38.839Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

