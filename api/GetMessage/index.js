module.exports = async function (context, req) {
  const date = "2023-04-01T14:07:05.410Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

