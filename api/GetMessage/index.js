module.exports = async function (context, req) {
  const date = "2023-05-17T03:09:44.326Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

