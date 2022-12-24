module.exports = async function (context, req) {
  const date = "2022-12-24T17:07:36.606Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

