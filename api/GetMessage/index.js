module.exports = async function (context, req) {
  const date = "2023-05-09T20:09:10.327Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

