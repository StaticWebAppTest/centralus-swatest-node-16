module.exports = async function (context, req) {
  const date = "2022-08-11T10:12:16.726Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

