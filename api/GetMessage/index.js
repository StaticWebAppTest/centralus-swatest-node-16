module.exports = async function (context, req) {
  const date = "2023-07-23T07:07:33.680Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

