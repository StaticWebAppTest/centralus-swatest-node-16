module.exports = async function (context, req) {
  const date = "2023-03-09T13:21:21.366Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

