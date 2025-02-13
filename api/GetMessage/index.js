module.exports = async function (context, req) {
  const date = "2025-02-13T07:11:19.958Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

