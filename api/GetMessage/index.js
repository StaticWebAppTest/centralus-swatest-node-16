module.exports = async function (context, req) {
  const date = "2024-04-17T07:09:57.957Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

