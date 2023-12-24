module.exports = async function (context, req) {
  const date = "2023-12-24T00:46:26.750Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

