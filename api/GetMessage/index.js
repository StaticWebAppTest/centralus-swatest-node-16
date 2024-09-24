module.exports = async function (context, req) {
  const date = "2024-09-24T06:17:09.042Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

