module.exports = async function (context, req) {
  const date = "2023-05-21T07:07:37.705Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

