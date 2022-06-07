module.exports = async function (context, req) {
  const date = "2022-06-07T18:12:43.794Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

