module.exports = async function (context, req) {
  const date = "2023-05-10T18:14:30.011Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

