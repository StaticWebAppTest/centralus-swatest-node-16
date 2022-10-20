module.exports = async function (context, req) {
  const date = "2022-10-20T23:16:34.416Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

