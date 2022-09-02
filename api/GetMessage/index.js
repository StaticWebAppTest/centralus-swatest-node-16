module.exports = async function (context, req) {
  const date = "2022-09-02T09:10:57.015Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

