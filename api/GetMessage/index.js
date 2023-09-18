module.exports = async function (context, req) {
  const date = "2023-09-18T13:10:46.992Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

