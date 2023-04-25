module.exports = async function (context, req) {
  const date = "2023-04-25T03:09:30.625Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

