module.exports = async function (context, req) {
  const date = "2023-05-09T03:09:44.924Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

