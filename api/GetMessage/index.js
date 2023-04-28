module.exports = async function (context, req) {
  const date = "2023-04-28T20:08:58.933Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

