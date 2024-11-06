module.exports = async function (context, req) {
  const date = "2024-11-06T17:09:30.560Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

