module.exports = async function (context, req) {
  const date = "2024-02-13T13:10:01.075Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

