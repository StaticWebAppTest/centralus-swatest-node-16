module.exports = async function (context, req) {
  const date = "2024-02-17T14:07:38.442Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

