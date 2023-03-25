module.exports = async function (context, req) {
  const date = "2023-03-25T23:08:23.083Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

