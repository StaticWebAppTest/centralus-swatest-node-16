module.exports = async function (context, req) {
  const date = "2023-12-31T23:08:54.871Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

