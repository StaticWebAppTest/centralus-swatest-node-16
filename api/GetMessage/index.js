module.exports = async function (context, req) {
  const date = "2024-07-08T06:15:33.084Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

