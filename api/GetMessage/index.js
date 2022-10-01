module.exports = async function (context, req) {
  const date = "2022-10-01T04:23:08.295Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

