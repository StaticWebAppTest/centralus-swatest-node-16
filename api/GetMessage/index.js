module.exports = async function (context, req) {
  const date = "2024-08-26T09:11:40.380Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

