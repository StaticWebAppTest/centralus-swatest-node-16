module.exports = async function (context, req) {
  const date = "2023-08-12T07:07:12.827Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

