module.exports = async function (context, req) {
  const date = "2022-11-15T21:09:56.876Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

