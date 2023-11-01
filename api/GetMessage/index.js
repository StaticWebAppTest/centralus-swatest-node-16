module.exports = async function (context, req) {
  const date = "2023-11-01T01:50:58.129Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

