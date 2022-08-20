module.exports = async function (context, req) {
  const date = "2022-08-20T04:26:26.871Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

