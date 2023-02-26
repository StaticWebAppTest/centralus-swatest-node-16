module.exports = async function (context, req) {
  const date = "2023-02-26T15:09:08.778Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

