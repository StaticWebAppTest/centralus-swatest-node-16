module.exports = async function (context, req) {
  const date = "2023-07-04T11:08:32.606Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

