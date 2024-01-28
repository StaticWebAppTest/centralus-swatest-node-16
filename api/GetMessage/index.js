module.exports = async function (context, req) {
  const date = "2024-01-28T03:09:03.920Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

