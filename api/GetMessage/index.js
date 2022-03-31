module.exports = async function (context, req) {
  const date = "2022-03-31T13:22:07.679Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

