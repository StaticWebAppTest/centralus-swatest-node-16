module.exports = async function (context, req) {
  const date = "2023-02-19T20:09:56.412Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

