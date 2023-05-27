module.exports = async function (context, req) {
  const date = "2023-05-27T21:07:01.037Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

