module.exports = async function (context, req) {
  const date = "2024-06-24T01:58:23.994Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

