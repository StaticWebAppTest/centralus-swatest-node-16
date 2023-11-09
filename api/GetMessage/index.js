module.exports = async function (context, req) {
  const date = "2023-11-09T13:10:57.107Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

