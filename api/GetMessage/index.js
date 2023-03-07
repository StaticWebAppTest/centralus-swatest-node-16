module.exports = async function (context, req) {
  const date = "2023-03-07T21:09:13.444Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

