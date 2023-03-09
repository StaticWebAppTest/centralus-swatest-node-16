module.exports = async function (context, req) {
  const date = "2023-03-09T17:09:19.290Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

