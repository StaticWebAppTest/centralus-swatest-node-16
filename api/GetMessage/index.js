module.exports = async function (context, req) {
  const date = "2023-11-03T10:09:32.876Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

