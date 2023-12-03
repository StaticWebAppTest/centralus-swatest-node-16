module.exports = async function (context, req) {
  const date = "2023-12-03T10:08:54.642Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

