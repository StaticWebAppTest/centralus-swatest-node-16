module.exports = async function (context, req) {
  const date = "2023-03-09T11:08:53.915Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

