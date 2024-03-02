module.exports = async function (context, req) {
  const date = "2024-03-02T18:11:48.015Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

