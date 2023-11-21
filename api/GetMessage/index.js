module.exports = async function (context, req) {
  const date = "2023-11-21T19:07:45.289Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

