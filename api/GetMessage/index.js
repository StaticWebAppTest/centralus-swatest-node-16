module.exports = async function (context, req) {
  const date = "2023-08-23T22:07:32.550Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

