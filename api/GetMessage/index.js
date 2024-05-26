module.exports = async function (context, req) {
  const date = "2024-05-26T13:09:09.037Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

