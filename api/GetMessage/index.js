module.exports = async function (context, req) {
  const date = "2023-06-27T08:13:08.829Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

