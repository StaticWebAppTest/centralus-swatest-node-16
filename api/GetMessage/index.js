module.exports = async function (context, req) {
  const date = "2022-10-03T11:11:29.606Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

