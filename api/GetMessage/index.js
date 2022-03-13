module.exports = async function (context, req) {
  const date = "2022-03-13T18:11:20.425Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

