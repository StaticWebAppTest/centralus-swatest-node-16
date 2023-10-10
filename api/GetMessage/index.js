module.exports = async function (context, req) {
  const date = "2023-10-10T16:11:36.606Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

