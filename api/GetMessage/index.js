module.exports = async function (context, req) {
  const date = "2022-07-21T01:01:25.520Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

