module.exports = async function (context, req) {
  const date = "2023-04-26T15:09:00.811Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

