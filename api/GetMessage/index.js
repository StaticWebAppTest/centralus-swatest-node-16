module.exports = async function (context, req) {
  const date = "2022-07-02T09:09:42.473Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

