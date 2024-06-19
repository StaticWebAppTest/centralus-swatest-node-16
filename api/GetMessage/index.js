module.exports = async function (context, req) {
  const date = "2024-06-19T20:10:20.441Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

