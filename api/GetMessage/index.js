module.exports = async function (context, req) {
  const date = "2022-05-23T10:12:55.015Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

