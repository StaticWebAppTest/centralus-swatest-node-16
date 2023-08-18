module.exports = async function (context, req) {
  const date = "2023-08-18T09:08:16.425Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

