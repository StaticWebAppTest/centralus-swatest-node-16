module.exports = async function (context, req) {
  const date = "2024-10-08T20:10:21.222Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

