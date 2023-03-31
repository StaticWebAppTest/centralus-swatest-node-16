module.exports = async function (context, req) {
  const date = "2023-03-31T11:07:39.789Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

