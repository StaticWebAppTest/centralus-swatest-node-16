module.exports = async function (context, req) {
  const date = "2023-10-06T02:16:53.380Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

