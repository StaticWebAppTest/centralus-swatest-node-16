module.exports = async function (context, req) {
  const date = "2024-04-19T11:07:42.351Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

