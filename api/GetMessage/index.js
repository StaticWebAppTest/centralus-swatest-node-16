module.exports = async function (context, req) {
  const date = "2023-05-27T05:07:53.191Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

