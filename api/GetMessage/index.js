module.exports = async function (context, req) {
  const date = "2023-04-09T21:07:10.678Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

