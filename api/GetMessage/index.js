module.exports = async function (context, req) {
  const date = "2023-03-21T19:07:21.020Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

