module.exports = async function (context, req) {
  const date = "2023-06-13T23:08:03.432Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

