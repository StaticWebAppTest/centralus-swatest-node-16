module.exports = async function (context, req) {
  const date = "2022-05-26T03:03:27.456Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

