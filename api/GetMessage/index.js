module.exports = async function (context, req) {
  const date = "2023-06-05T17:07:52.068Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

