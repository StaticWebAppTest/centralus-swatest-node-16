module.exports = async function (context, req) {
  const date = "2023-07-08T23:09:06.453Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

