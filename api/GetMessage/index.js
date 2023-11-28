module.exports = async function (context, req) {
  const date = "2023-11-28T18:11:52.004Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

