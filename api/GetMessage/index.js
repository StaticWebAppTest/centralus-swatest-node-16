module.exports = async function (context, req) {
  const date = "2024-06-07T22:10:08.058Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

