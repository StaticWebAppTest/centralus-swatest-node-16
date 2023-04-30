module.exports = async function (context, req) {
  const date = "2023-04-30T02:02:21.629Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

