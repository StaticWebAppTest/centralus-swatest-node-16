module.exports = async function (context, req) {
  const date = "2022-04-19T05:18:39.955Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

