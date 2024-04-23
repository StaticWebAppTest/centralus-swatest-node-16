module.exports = async function (context, req) {
  const date = "2024-04-23T15:09:36.518Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

