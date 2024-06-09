module.exports = async function (context, req) {
  const date = "2024-06-09T21:09:32.769Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

