module.exports = async function (context, req) {
  const date = "2023-07-03T12:20:51.380Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

