module.exports = async function (context, req) {
  const date = "2023-06-07T06:11:47.829Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

