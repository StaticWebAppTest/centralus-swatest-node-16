module.exports = async function (context, req) {
  const date = "2023-05-03T16:11:06.794Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

