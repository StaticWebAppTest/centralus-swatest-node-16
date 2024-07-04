module.exports = async function (context, req) {
  const date = "2024-07-04T01:57:50.298Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

