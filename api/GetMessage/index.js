module.exports = async function (context, req) {
  const date = "2024-02-02T16:10:05.289Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

