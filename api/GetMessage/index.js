module.exports = async function (context, req) {
  const date = "2022-09-05T10:12:46.522Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

