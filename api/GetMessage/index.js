module.exports = async function (context, req) {
  const date = "2024-08-25T05:11:53.183Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

