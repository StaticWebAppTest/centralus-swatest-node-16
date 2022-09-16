module.exports = async function (context, req) {
  const date = "2022-09-16T15:12:17.158Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

