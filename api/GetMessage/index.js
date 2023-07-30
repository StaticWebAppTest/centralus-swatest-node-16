module.exports = async function (context, req) {
  const date = "2023-07-30T14:06:59.616Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

