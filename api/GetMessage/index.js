module.exports = async function (context, req) {
  const date = "2023-11-27T06:12:42.425Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

