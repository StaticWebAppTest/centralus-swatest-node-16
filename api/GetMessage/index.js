module.exports = async function (context, req) {
  const date = "2023-07-22T07:07:22.776Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

