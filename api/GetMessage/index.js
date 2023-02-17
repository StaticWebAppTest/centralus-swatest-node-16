module.exports = async function (context, req) {
  const date = "2023-02-17T09:10:04.639Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

