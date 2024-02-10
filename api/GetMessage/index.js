module.exports = async function (context, req) {
  const date = "2024-02-10T09:08:41.015Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

