module.exports = async function (context, req) {
  const date = "2022-03-22T12:19:00.288Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

