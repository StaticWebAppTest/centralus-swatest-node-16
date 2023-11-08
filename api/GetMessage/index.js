module.exports = async function (context, req) {
  const date = "2023-11-08T17:08:21.678Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

