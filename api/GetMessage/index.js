module.exports = async function (context, req) {
  const date = "2023-07-24T18:12:50.328Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

