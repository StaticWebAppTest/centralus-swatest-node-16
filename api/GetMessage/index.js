module.exports = async function (context, req) {
  const date = "2023-12-30T12:15:06.289Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

