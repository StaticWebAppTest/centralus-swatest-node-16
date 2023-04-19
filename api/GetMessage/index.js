module.exports = async function (context, req) {
  const date = "2023-04-19T17:07:59.732Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

