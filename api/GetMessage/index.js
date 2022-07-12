module.exports = async function (context, req) {
  const date = "2022-07-12T09:20:32.680Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

