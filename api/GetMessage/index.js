module.exports = async function (context, req) {
  const date = "2023-09-17T15:07:29.247Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

