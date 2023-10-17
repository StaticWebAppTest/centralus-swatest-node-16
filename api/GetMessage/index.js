module.exports = async function (context, req) {
  const date = "2023-10-17T02:17:33.284Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

