module.exports = async function (context, req) {
  const date = "2023-12-15T21:07:57.850Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

