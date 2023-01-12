module.exports = async function (context, req) {
  const date = "2023-01-12T23:10:30.663Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

