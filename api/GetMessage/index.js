module.exports = async function (context, req) {
  const date = "2023-05-04T17:07:34.068Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

