module.exports = async function (context, req) {
  const date = "2022-07-04T01:05:42.479Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

