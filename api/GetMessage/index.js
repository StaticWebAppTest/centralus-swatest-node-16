module.exports = async function (context, req) {
  const date = "2024-02-04T07:09:13.754Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

