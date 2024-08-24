module.exports = async function (context, req) {
  const date = "2024-08-24T20:11:21.522Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

