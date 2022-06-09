module.exports = async function (context, req) {
  const date = "2022-06-09T10:12:28.210Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

