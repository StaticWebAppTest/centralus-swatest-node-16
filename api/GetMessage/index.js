module.exports = async function (context, req) {
  const date = "2024-10-11T17:10:14.221Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

