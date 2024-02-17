module.exports = async function (context, req) {
  const date = "2024-02-17T07:07:53.741Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

