module.exports = async function (context, req) {
  const date = "2022-06-13T00:57:59.073Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

