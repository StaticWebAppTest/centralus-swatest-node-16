module.exports = async function (context, req) {
  const date = "2024-09-07T03:12:04.111Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

