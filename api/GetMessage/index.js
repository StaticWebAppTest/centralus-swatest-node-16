module.exports = async function (context, req) {
  const date = "2023-03-27T22:08:57.392Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

