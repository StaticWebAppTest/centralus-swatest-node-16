module.exports = async function (context, req) {
  const date = "2023-06-23T19:07:47.606Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

