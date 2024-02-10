module.exports = async function (context, req) {
  const date = "2024-02-10T05:08:00.504Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

