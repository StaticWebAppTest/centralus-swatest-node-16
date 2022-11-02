module.exports = async function (context, req) {
  const date = "2022-11-02T07:13:05.366Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

