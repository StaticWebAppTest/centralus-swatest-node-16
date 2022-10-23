module.exports = async function (context, req) {
  const date = "2022-10-23T01:13:49.510Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

