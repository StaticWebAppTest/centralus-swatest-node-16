module.exports = async function (context, req) {
  const date = "2024-02-28T12:15:20.920Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

