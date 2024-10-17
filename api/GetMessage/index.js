module.exports = async function (context, req) {
  const date = "2024-10-17T14:11:32.308Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

