module.exports = async function (context, req) {
  const date = "2022-09-15T04:16:45.405Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

