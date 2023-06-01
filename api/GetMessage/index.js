module.exports = async function (context, req) {
  const date = "2023-06-01T04:11:45.906Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

