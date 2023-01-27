module.exports = async function (context, req) {
  const date = "2023-01-27T09:09:32.439Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

