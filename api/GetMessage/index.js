module.exports = async function (context, req) {
  const date = "2023-02-16T17:08:59.678Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

