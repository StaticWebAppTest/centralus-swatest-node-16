module.exports = async function (context, req) {
  const date = "2024-11-02T09:11:17.283Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

