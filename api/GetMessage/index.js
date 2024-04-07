module.exports = async function (context, req) {
  const date = "2024-04-07T13:10:13.112Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

