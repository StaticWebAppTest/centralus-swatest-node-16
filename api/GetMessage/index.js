module.exports = async function (context, req) {
  const date = "2024-04-15T09:09:14.751Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

