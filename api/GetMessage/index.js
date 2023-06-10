module.exports = async function (context, req) {
  const date = "2023-06-10T16:10:34.289Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

