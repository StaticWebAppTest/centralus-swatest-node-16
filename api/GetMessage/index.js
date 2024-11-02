module.exports = async function (context, req) {
  const date = "2024-11-02T15:11:58.652Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

