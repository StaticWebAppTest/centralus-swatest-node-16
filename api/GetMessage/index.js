module.exports = async function (context, req) {
  const date = "2023-07-29T23:08:00.933Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

