module.exports = async function (context, req) {
  const date = "2024-11-15T23:11:30.236Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

