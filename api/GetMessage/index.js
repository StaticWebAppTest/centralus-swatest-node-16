module.exports = async function (context, req) {
  const date = "2024-09-15T14:09:33.104Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

