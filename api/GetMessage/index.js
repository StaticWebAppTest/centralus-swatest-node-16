module.exports = async function (context, req) {
  const date = "2022-08-22T10:13:00.708Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

