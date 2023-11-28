module.exports = async function (context, req) {
  const date = "2023-11-28T02:23:55.366Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

