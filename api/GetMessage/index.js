module.exports = async function (context, req) {
  const date = "2023-12-19T01:52:03.701Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

