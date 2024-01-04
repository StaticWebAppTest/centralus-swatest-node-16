module.exports = async function (context, req) {
  const date = "2024-01-04T11:07:58.185Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

