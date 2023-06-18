module.exports = async function (context, req) {
  const date = "2023-06-18T02:30:15.497Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

