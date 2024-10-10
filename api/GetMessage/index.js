module.exports = async function (context, req) {
  const date = "2024-10-10T14:11:18.155Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

