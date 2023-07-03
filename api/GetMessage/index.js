module.exports = async function (context, req) {
  const date = "2023-07-03T14:09:22.829Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

