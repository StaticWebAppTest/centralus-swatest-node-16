module.exports = async function (context, req) {
  const date = "2024-05-12T03:10:32.920Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

