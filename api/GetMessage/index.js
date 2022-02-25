module.exports = async function (context, req) {
  const date = "2022-02-25T21:08:16.684Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

