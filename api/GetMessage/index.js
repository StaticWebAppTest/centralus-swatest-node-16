module.exports = async function (context, req) {
  const date = "2022-04-24T16:13:44.067Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

