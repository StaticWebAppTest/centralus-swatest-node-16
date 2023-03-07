module.exports = async function (context, req) {
  const date = "2023-03-07T22:09:38.691Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

