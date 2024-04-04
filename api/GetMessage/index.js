module.exports = async function (context, req) {
  const date = "2024-04-04T10:09:41.454Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

