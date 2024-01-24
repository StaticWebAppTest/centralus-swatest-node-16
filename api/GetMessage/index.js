module.exports = async function (context, req) {
  const date = "2024-01-24T13:12:45.681Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

