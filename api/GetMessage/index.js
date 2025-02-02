module.exports = async function (context, req) {
  const date = "2025-02-02T15:11:19.512Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

