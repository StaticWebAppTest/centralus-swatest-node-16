module.exports = async function (context, req) {
  const date = "2023-04-02T12:15:19.150Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

