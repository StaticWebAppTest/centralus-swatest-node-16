module.exports = async function (context, req) {
  const date = "2023-04-24T00:49:09.693Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

