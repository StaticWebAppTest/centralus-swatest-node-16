module.exports = async function (context, req) {
  const date = "2022-11-03T07:09:33.519Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

