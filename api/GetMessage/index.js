module.exports = async function (context, req) {
  const date = "2023-12-13T15:09:58.318Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

