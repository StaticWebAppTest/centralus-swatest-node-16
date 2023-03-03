module.exports = async function (context, req) {
  const date = "2023-03-03T05:14:28.020Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

