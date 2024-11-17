module.exports = async function (context, req) {
  const date = "2024-11-17T16:13:08.583Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

