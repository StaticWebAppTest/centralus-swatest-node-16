module.exports = async function (context, req) {
  const date = "2025-05-28T20:15:04.807Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

