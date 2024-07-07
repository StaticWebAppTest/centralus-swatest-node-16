module.exports = async function (context, req) {
  const date = "2024-07-07T03:12:31.020Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

