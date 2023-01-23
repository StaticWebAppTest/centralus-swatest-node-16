module.exports = async function (context, req) {
  const date = "2023-01-23T20:10:06.518Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

