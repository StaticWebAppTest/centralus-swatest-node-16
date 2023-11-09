module.exports = async function (context, req) {
  const date = "2023-11-09T00:41:24.871Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

