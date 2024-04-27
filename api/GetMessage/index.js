module.exports = async function (context, req) {
  const date = "2024-04-27T13:10:33.477Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

