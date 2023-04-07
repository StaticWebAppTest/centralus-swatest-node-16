module.exports = async function (context, req) {
  const date = "2023-04-07T01:56:00.811Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

