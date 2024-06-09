module.exports = async function (context, req) {
  const date = "2024-06-09T13:10:15.961Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

