module.exports = async function (context, req) {
  const date = "2022-07-16T13:19:51.589Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

