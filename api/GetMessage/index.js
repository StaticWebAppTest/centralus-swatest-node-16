module.exports = async function (context, req) {
  const date = "2024-08-12T09:11:52.155Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

