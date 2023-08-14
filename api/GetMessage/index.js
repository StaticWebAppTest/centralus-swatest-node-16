module.exports = async function (context, req) {
  const date = "2023-08-14T21:07:27.678Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

