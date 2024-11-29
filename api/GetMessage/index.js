module.exports = async function (context, req) {
  const date = "2024-11-29T01:01:02.017Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

