module.exports = async function (context, req) {
  const date = "2024-09-14T09:11:09.244Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

