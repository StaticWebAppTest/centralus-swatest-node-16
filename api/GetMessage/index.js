module.exports = async function (context, req) {
  const date = "2022-05-30T01:01:57.294Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

