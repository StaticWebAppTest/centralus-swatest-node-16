module.exports = async function (context, req) {
  const date = "2023-03-25T04:10:43.425Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

