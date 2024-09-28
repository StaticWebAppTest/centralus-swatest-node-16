module.exports = async function (context, req) {
  const date = "2024-09-28T20:12:00.068Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

