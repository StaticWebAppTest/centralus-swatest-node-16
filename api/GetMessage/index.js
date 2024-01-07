module.exports = async function (context, req) {
  const date = "2024-01-07T14:07:50.654Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

