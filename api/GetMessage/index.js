module.exports = async function (context, req) {
  const date = "2023-04-04T19:07:10.482Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

