module.exports = async function (context, req) {
  const date = "2024-06-10T02:34:09.679Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

