module.exports = async function (context, req) {
  const date = "2023-05-05T15:08:44.672Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

