module.exports = async function (context, req) {
  const date = "2023-09-03T06:10:42.426Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

