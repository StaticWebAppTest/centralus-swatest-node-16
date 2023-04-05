module.exports = async function (context, req) {
  const date = "2023-04-05T09:10:18.639Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

