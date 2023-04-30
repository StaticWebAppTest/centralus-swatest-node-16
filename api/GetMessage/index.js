module.exports = async function (context, req) {
  const date = "2023-04-30T12:15:19.894Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

