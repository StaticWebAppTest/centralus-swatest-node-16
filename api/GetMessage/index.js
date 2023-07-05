module.exports = async function (context, req) {
  const date = "2023-07-05T09:10:25.890Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

