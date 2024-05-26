module.exports = async function (context, req) {
  const date = "2024-05-26T20:09:23.382Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

