module.exports = async function (context, req) {
  const date = "2022-08-20T03:09:49.871Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

