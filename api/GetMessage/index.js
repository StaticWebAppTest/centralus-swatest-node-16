module.exports = async function (context, req) {
  const date = "2023-10-13T22:08:07.051Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

