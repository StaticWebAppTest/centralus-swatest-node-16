module.exports = async function (context, req) {
  const date = "2025-06-04T11:12:27.289Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

