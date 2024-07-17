module.exports = async function (context, req) {
  const date = "2024-07-17T22:10:44.774Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

