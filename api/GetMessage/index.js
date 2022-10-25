module.exports = async function (context, req) {
  const date = "2022-10-25T06:09:06.254Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

