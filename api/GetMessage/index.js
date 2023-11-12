module.exports = async function (context, req) {
  const date = "2023-11-12T12:15:10.095Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

