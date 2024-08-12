module.exports = async function (context, req) {
  const date = "2024-08-12T13:16:58.901Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

