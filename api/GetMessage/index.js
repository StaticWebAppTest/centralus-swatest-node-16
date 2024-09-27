module.exports = async function (context, req) {
  const date = "2024-09-27T19:10:06.655Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

