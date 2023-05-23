module.exports = async function (context, req) {
  const date = "2023-05-23T16:11:22.606Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

