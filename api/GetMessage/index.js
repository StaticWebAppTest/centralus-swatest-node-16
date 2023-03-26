module.exports = async function (context, req) {
  const date = "2023-03-26T18:10:43.659Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

