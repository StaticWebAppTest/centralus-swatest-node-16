module.exports = async function (context, req) {
  const date = "2024-12-03T12:24:19.289Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

