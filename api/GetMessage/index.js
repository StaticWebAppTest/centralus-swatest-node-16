module.exports = async function (context, req) {
  const date = "2022-05-11T10:12:11.310Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

