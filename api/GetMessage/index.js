module.exports = async function (context, req) {
  const date = "2024-11-20T14:11:43.136Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

