module.exports = async function (context, req) {
  const date = "2024-02-18T14:07:22.758Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

