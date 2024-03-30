module.exports = async function (context, req) {
  const date = "2024-03-30T08:12:33.289Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

