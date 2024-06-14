module.exports = async function (context, req) {
  const date = "2024-06-14T06:14:42.367Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

