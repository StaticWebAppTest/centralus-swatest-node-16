module.exports = async function (context, req) {
  const date = "2024-12-26T08:15:21.830Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

