module.exports = async function (context, req) {
  const date = "2024-05-28T00:45:18.942Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

