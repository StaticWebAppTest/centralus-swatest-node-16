module.exports = async function (context, req) {
  const date = "2022-03-09T12:16:51.607Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

