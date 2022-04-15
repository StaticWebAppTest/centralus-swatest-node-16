module.exports = async function (context, req) {
  const date = "2022-04-15T13:20:16.809Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

