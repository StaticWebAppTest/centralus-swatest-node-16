module.exports = async function (context, req) {
  const date = "2024-01-24T09:09:40.723Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

