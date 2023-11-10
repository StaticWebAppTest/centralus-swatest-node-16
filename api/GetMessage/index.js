module.exports = async function (context, req) {
  const date = "2023-11-10T01:45:54.551Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

