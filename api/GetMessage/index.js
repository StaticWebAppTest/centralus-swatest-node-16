module.exports = async function (context, req) {
  const date = "2023-03-30T08:12:27.410Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

