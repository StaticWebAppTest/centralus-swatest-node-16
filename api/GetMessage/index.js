module.exports = async function (context, req) {
  const date = "2023-03-01T16:13:52.802Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

