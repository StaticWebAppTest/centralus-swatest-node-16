module.exports = async function (context, req) {
  const date = "2022-09-03T03:58:17.376Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

