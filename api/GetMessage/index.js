module.exports = async function (context, req) {
  const date = "2023-07-18T08:12:19.035Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

