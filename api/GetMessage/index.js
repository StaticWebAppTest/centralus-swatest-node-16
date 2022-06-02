module.exports = async function (context, req) {
  const date = "2022-06-02T14:14:33.015Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

