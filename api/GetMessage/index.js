module.exports = async function (context, req) {
  const date = "2023-11-09T02:18:38.112Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

