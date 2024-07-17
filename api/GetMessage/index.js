module.exports = async function (context, req) {
  const date = "2024-07-17T08:13:43.703Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

