module.exports = async function (context, req) {
  const date = "2023-02-16T16:13:30.307Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

