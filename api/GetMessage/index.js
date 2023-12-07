module.exports = async function (context, req) {
  const date = "2023-12-07T19:07:30.289Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

