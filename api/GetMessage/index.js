module.exports = async function (context, req) {
  const date = "2022-02-28T17:12:24.942Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

