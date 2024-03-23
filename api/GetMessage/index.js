module.exports = async function (context, req) {
  const date = "2024-03-23T14:07:34.329Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

