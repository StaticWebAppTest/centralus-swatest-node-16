module.exports = async function (context, req) {
  const date = "2023-10-10T10:09:55.772Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

