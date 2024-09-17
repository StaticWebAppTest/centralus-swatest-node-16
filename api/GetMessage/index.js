module.exports = async function (context, req) {
  const date = "2024-09-17T21:10:33.505Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

