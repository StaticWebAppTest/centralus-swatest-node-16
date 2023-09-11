module.exports = async function (context, req) {
  const date = "2023-09-11T22:08:07.068Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

