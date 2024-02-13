module.exports = async function (context, req) {
  const date = "2024-02-13T08:12:19.963Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

