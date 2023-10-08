module.exports = async function (context, req) {
  const date = "2023-10-08T19:06:33.314Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

