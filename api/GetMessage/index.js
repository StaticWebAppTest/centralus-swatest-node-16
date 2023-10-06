module.exports = async function (context, req) {
  const date = "2023-10-06T01:43:22.032Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

