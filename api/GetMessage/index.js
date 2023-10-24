module.exports = async function (context, req) {
  const date = "2023-10-24T04:10:30.425Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

