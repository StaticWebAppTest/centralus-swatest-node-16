module.exports = async function (context, req) {
  const date = "2023-10-26T19:07:09.314Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

