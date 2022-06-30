module.exports = async function (context, req) {
  const date = "2022-06-30T10:14:52.015Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

