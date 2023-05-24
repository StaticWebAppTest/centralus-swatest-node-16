module.exports = async function (context, req) {
  const date = "2023-05-24T12:16:38.832Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

