module.exports = async function (context, req) {
  const date = "2023-05-31T04:10:22.956Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

