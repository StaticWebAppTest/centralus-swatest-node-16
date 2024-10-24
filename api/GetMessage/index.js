module.exports = async function (context, req) {
  const date = "2024-10-24T18:15:56.476Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

