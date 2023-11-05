module.exports = async function (context, req) {
  const date = "2023-11-05T12:15:08.239Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

