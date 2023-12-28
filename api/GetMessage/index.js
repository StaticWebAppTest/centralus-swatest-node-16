module.exports = async function (context, req) {
  const date = "2023-12-28T00:41:40.827Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

