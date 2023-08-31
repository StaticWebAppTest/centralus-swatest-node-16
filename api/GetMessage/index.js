module.exports = async function (context, req) {
  const date = "2023-08-31T13:11:07.678Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

