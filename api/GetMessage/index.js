module.exports = async function (context, req) {
  const date = "2023-08-20T17:06:43.679Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

