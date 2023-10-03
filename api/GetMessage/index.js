module.exports = async function (context, req) {
  const date = "2023-10-03T23:08:15.094Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

