module.exports = async function (context, req) {
  const date = "2023-08-13T08:09:38.365Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

