module.exports = async function (context, req) {
  const date = "2023-07-11T10:11:04.015Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

