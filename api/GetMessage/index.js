module.exports = async function (context, req) {
  const date = "2024-10-28T17:10:47.970Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

