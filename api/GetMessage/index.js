module.exports = async function (context, req) {
  const date = "2022-05-05T02:54:18.480Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

