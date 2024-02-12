module.exports = async function (context, req) {
  const date = "2024-02-12T20:09:07.907Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

