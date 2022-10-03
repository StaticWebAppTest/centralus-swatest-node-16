module.exports = async function (context, req) {
  const date = "2022-10-03T23:14:30.549Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

