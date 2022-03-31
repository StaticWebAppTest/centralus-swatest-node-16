module.exports = async function (context, req) {
  const date = "2022-03-31T17:13:57.654Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

