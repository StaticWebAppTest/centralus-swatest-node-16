module.exports = async function (context, req) {
  const date = "2023-06-06T18:10:43.366Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

