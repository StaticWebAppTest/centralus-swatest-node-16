module.exports = async function (context, req) {
  const date = "2023-07-07T14:08:53.366Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

