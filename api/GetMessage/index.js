module.exports = async function (context, req) {
  const date = "2024-01-28T18:09:45.526Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

