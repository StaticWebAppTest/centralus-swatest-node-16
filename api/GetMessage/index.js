module.exports = async function (context, req) {
  const date = "2024-05-06T07:09:49.769Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

