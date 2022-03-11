module.exports = async function (context, req) {
  const date = "2022-03-11T00:45:22.316Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

