module.exports = async function (context, req) {
  const date = "2023-08-11T02:12:24.253Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

