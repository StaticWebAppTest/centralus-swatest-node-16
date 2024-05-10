module.exports = async function (context, req) {
  const date = "2024-05-10T07:09:53.233Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

