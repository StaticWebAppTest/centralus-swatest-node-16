module.exports = async function (context, req) {
  const date = "2024-04-25T20:09:15.293Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

