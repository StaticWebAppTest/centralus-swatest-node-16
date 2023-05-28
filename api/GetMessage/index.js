module.exports = async function (context, req) {
  const date = "2023-05-28T18:09:42.425Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

