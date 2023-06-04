module.exports = async function (context, req) {
  const date = "2023-06-04T17:06:59.377Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

