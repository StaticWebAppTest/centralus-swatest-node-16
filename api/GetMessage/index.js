module.exports = async function (context, req) {
  const date = "2023-02-24T10:11:01.015Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

