module.exports = async function (context, req) {
  const date = "2024-03-06T08:13:03.740Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

