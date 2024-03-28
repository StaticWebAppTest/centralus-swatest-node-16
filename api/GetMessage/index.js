module.exports = async function (context, req) {
  const date = "2024-03-28T07:08:26.111Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

