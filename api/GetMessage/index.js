module.exports = async function (context, req) {
  const date = "2023-09-09T15:07:27.037Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

