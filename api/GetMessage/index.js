module.exports = async function (context, req) {
  const date = "2023-05-17T14:08:08.684Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

