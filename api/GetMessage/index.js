module.exports = async function (context, req) {
  const date = "2024-05-07T04:12:42.672Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

