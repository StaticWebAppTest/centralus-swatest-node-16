module.exports = async function (context, req) {
  const date = "2023-08-12T18:09:13.751Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

