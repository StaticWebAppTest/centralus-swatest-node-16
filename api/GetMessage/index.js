module.exports = async function (context, req) {
  const date = "2024-08-28T09:11:51.920Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

