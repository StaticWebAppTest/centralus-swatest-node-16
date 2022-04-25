module.exports = async function (context, req) {
  const date = "2022-04-25T04:17:32.570Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

