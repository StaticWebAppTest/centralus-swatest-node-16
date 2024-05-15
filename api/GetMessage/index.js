module.exports = async function (context, req) {
  const date = "2024-05-15T04:12:50.380Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

