module.exports = async function (context, req) {
  const date = "2023-07-19T14:08:27.366Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

