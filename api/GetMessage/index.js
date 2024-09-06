module.exports = async function (context, req) {
  const date = "2024-09-06T15:12:17.501Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

