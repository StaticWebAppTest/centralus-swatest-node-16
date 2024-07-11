module.exports = async function (context, req) {
  const date = "2024-07-11T01:59:24.359Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

