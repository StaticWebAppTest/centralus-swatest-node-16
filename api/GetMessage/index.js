module.exports = async function (context, req) {
  const date = "2023-03-06T11:08:48.394Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

