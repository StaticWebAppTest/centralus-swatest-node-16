module.exports = async function (context, req) {
  const date = "2022-10-20T11:13:26.593Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

