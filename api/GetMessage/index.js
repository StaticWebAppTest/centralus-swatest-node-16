module.exports = async function (context, req) {
  const date = "2024-10-20T04:14:15.020Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

