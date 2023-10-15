module.exports = async function (context, req) {
  const date = "2023-10-15T08:10:20.794Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

