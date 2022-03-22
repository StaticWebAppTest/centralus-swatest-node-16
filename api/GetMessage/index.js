module.exports = async function (context, req) {
  const date = "2022-03-22T11:08:40.798Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

