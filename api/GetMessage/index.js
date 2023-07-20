module.exports = async function (context, req) {
  const date = "2023-07-20T17:07:47.550Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

