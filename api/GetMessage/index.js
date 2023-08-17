module.exports = async function (context, req) {
  const date = "2023-08-17T05:08:12.277Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

