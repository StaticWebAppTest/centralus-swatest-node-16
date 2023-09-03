module.exports = async function (context, req) {
  const date = "2023-09-03T15:07:53.915Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

