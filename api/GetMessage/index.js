module.exports = async function (context, req) {
  const date = "2024-10-09T02:14:13.453Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

