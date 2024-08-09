module.exports = async function (context, req) {
  const date = "2024-08-09T19:09:14.896Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

