module.exports = async function (context, req) {
  const date = "2024-05-23T21:09:04.243Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

