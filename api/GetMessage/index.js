module.exports = async function (context, req) {
  const date = "2023-12-28T15:08:59.841Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

