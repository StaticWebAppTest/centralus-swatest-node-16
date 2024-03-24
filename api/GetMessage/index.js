module.exports = async function (context, req) {
  const date = "2024-03-24T00:46:40.850Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

