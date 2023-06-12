module.exports = async function (context, req) {
  const date = "2023-06-12T16:10:39.020Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

