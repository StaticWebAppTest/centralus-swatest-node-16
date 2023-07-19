module.exports = async function (context, req) {
  const date = "2023-07-19T11:07:32.496Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

