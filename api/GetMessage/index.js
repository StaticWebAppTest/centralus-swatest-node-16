module.exports = async function (context, req) {
  const date = "2024-10-20T15:10:28.981Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

