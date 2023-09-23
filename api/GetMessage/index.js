module.exports = async function (context, req) {
  const date = "2023-09-23T03:08:44.669Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

