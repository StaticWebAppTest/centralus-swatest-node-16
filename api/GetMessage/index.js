module.exports = async function (context, req) {
  const date = "2023-11-19T01:55:22.809Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

