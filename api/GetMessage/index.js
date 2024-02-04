module.exports = async function (context, req) {
  const date = "2024-02-04T09:09:05.591Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

