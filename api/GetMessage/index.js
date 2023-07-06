module.exports = async function (context, req) {
  const date = "2023-07-06T21:09:03.967Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

