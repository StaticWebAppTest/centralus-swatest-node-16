module.exports = async function (context, req) {
  const date = "2023-04-11T12:17:07.051Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

