module.exports = async function (context, req) {
  const date = "2023-03-26T13:11:17.441Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

