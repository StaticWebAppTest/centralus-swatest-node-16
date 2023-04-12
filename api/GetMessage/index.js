module.exports = async function (context, req) {
  const date = "2023-04-12T19:07:18.450Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

