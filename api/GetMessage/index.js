module.exports = async function (context, req) {
  const date = "2024-04-27T22:09:06.058Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

