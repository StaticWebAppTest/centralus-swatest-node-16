module.exports = async function (context, req) {
  const date = "2023-06-27T23:09:27.037Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

