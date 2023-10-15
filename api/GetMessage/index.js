module.exports = async function (context, req) {
  const date = "2023-10-15T22:07:23.677Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

