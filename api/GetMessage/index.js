module.exports = async function (context, req) {
  const date = "2022-08-30T10:12:17.866Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

