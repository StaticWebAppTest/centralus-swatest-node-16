module.exports = async function (context, req) {
  const date = "2023-11-07T06:11:56.678Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

