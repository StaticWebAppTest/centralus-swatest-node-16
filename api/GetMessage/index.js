module.exports = async function (context, req) {
  const date = "2023-04-15T09:08:14.380Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

