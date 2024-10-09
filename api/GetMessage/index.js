module.exports = async function (context, req) {
  const date = "2024-10-09T15:11:32.970Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

