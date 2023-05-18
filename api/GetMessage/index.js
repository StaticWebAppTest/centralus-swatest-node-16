module.exports = async function (context, req) {
  const date = "2023-05-18T21:07:44.823Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

