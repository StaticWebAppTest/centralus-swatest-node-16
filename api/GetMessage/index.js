module.exports = async function (context, req) {
  const date = "2023-08-23T20:08:23.418Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

