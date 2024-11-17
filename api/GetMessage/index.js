module.exports = async function (context, req) {
  const date = "2024-11-17T17:09:42.672Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

