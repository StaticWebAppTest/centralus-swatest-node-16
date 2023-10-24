module.exports = async function (context, req) {
  const date = "2023-10-24T01:43:12.412Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

