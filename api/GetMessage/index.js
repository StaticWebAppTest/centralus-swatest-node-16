module.exports = async function (context, req) {
  const date = "2022-12-01T14:09:39.981Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

