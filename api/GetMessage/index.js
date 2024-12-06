module.exports = async function (context, req) {
  const date = "2024-12-06T19:10:00.423Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

