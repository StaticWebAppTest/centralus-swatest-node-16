module.exports = async function (context, req) {
  const date = "2022-10-31T11:11:27.606Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

