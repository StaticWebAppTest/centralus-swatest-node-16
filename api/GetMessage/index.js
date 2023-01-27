module.exports = async function (context, req) {
  const date = "2023-01-27T13:15:55.196Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

