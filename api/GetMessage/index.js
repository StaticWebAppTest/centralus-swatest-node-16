module.exports = async function (context, req) {
  const date = "2022-05-05T10:12:08.866Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

