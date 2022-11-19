module.exports = async function (context, req) {
  const date = "2022-11-19T04:12:44.148Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

