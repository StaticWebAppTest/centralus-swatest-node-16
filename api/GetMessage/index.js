module.exports = async function (context, req) {
  const date = "2023-12-25T18:10:57.794Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

