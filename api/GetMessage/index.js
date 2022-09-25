module.exports = async function (context, req) {
  const date = "2022-09-25T10:13:17.983Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

