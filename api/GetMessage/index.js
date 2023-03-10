module.exports = async function (context, req) {
  const date = "2023-03-10T18:11:38.202Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

