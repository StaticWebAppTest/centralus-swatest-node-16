module.exports = async function (context, req) {
  const date = "2024-03-09T15:07:53.660Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

