module.exports = async function (context, req) {
  const date = "2024-04-25T15:09:08.261Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

