module.exports = async function (context, req) {
  const date = "2024-01-16T15:09:38.423Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

