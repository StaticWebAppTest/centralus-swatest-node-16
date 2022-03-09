module.exports = async function (context, req) {
  const date = "2022-03-09T02:09:00.299Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

