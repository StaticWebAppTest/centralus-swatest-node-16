module.exports = async function (context, req) {
  const date = "2023-04-18T11:07:38.593Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

