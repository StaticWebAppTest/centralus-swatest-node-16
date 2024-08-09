module.exports = async function (context, req) {
  const date = "2024-08-09T05:11:08.414Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

