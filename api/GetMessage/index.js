module.exports = async function (context, req) {
  const date = "2023-09-10T20:08:14.260Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

