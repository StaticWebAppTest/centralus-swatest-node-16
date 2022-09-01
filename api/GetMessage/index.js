module.exports = async function (context, req) {
  const date = "2022-09-01T05:45:46.654Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

