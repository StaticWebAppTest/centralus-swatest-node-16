module.exports = async function (context, req) {
  const date = "2023-10-17T21:07:44.684Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

