module.exports = async function (context, req) {
  const date = "2023-09-09T01:38:52.820Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

