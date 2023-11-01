module.exports = async function (context, req) {
  const date = "2023-11-01T04:10:46.230Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

