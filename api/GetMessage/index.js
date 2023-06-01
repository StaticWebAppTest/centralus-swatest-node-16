module.exports = async function (context, req) {
  const date = "2023-06-01T11:07:02.915Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

