module.exports = async function (context, req) {
  const date = "2024-04-19T04:11:04.685Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

