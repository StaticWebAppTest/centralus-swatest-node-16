module.exports = async function (context, req) {
  const date = "2023-03-23T11:08:05.707Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

