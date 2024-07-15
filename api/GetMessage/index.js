module.exports = async function (context, req) {
  const date = "2024-07-15T07:10:17.207Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

