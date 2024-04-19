module.exports = async function (context, req) {
  const date = "2024-04-19T13:10:21.167Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

