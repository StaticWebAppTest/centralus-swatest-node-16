module.exports = async function (context, req) {
  const date = "2023-02-07T12:18:45.591Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

