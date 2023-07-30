module.exports = async function (context, req) {
  const date = "2023-07-30T05:07:44.473Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

