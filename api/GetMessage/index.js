module.exports = async function (context, req) {
  const date = "2022-09-09T22:12:07.037Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

