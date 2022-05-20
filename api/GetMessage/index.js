module.exports = async function (context, req) {
  const date = "2022-05-20T18:13:34.190Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

