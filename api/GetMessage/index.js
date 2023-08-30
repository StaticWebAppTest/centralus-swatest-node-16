module.exports = async function (context, req) {
  const date = "2023-08-30T17:07:53.790Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

