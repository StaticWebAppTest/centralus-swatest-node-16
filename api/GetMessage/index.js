module.exports = async function (context, req) {
  const date = "2023-08-01T13:11:45.591Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

