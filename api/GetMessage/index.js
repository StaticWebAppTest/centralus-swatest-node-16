module.exports = async function (context, req) {
  const date = "2023-04-09T07:07:23.496Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

