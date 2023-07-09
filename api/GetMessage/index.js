module.exports = async function (context, req) {
  const date = "2023-07-09T07:08:35.020Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

