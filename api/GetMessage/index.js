module.exports = async function (context, req) {
  const date = "2023-11-08T19:07:19.678Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

