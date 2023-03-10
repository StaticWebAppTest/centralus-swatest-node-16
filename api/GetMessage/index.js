module.exports = async function (context, req) {
  const date = "2023-03-10T21:08:17.405Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

