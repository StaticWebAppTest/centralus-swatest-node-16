module.exports = async function (context, req) {
  const date = "2024-04-04T11:07:28.672Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

