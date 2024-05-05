module.exports = async function (context, req) {
  const date = "2024-05-05T15:10:36.277Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

