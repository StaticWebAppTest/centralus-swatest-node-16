module.exports = async function (context, req) {
  const date = "2023-05-06T02:23:35.924Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

