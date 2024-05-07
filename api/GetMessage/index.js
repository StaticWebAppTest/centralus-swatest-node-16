module.exports = async function (context, req) {
  const date = "2024-05-07T03:11:44.616Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

