module.exports = async function (context, req) {
  const date = "2023-04-12T14:08:32.948Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

