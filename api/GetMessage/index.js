module.exports = async function (context, req) {
  const date = "2023-09-03T01:43:52.437Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

