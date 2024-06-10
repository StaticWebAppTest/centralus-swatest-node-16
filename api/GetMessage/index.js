module.exports = async function (context, req) {
  const date = "2024-06-10T05:10:37.758Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

