module.exports = async function (context, req) {
  const date = "2023-09-24T23:08:03.037Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

