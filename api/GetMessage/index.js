module.exports = async function (context, req) {
  const date = "2024-05-13T11:08:09.325Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

