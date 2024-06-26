module.exports = async function (context, req) {
  const date = "2024-06-26T08:13:30.334Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

