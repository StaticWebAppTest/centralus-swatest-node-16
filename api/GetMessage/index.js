module.exports = async function (context, req) {
  const date = "2023-05-27T07:07:25.274Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

