module.exports = async function (context, req) {
  const date = "2023-05-14T17:06:56.672Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

