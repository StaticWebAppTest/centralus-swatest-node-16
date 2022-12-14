module.exports = async function (context, req) {
  const date = "2022-12-14T14:08:52.473Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

