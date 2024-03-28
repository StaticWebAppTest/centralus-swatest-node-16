module.exports = async function (context, req) {
  const date = "2024-03-28T22:09:00.656Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

