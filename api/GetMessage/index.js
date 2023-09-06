module.exports = async function (context, req) {
  const date = "2023-09-06T17:07:50.519Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

