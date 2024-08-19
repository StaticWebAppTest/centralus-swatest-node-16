module.exports = async function (context, req) {
  const date = "2024-08-19T17:11:06.380Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

