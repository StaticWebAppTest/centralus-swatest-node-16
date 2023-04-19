module.exports = async function (context, req) {
  const date = "2023-04-19T03:09:34.686Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

