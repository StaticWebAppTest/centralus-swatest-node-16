module.exports = async function (context, req) {
  const date = "2023-09-12T21:07:39.775Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

