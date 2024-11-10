module.exports = async function (context, req) {
  const date = "2024-11-10T14:09:25.012Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

