module.exports = async function (context, req) {
  const date = "2023-03-24T12:16:19.662Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

