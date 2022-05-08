module.exports = async function (context, req) {
  const date = "2022-05-08T10:12:00.968Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

