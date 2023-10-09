module.exports = async function (context, req) {
  const date = "2023-10-09T16:11:50.606Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

