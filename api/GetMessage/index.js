module.exports = async function (context, req) {
  const date = "2023-04-12T22:08:11.119Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

