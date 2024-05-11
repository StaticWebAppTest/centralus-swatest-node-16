module.exports = async function (context, req) {
  const date = "2024-05-11T18:11:47.794Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

