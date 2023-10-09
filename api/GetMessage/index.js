module.exports = async function (context, req) {
  const date = "2023-10-09T18:11:35.948Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

