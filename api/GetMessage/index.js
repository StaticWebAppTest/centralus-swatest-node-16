module.exports = async function (context, req) {
  const date = "2024-07-15T23:11:18.539Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

