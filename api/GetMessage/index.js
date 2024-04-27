module.exports = async function (context, req) {
  const date = "2024-04-27T10:10:35.401Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

