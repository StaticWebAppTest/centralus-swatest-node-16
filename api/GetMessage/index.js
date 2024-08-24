module.exports = async function (context, req) {
  const date = "2024-08-24T05:09:45.714Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

