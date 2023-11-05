module.exports = async function (context, req) {
  const date = "2023-11-05T09:08:06.725Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

