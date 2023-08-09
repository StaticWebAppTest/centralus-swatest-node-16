module.exports = async function (context, req) {
  const date = "2023-08-09T23:08:18.642Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

