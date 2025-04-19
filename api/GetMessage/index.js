module.exports = async function (context, req) {
  const date = "2025-04-19T23:13:10.020Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

