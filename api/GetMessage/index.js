module.exports = async function (context, req) {
  const date = "2023-05-13T15:07:33.202Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

