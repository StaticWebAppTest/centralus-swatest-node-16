module.exports = async function (context, req) {
  const date = "2022-09-06T18:14:00.663Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

