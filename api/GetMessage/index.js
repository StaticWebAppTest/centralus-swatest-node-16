module.exports = async function (context, req) {
  const date = "2022-09-28T17:32:07.471Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

