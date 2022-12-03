module.exports = async function (context, req) {
  const date = "2022-12-03T10:09:35.445Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

