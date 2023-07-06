module.exports = async function (context, req) {
  const date = "2023-07-06T11:08:58.981Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

