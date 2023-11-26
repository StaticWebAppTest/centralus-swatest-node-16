module.exports = async function (context, req) {
  const date = "2023-11-26T02:23:25.444Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

