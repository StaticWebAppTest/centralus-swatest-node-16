module.exports = async function (context, req) {
  const date = "2022-11-15T10:12:00.579Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

