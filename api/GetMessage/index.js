module.exports = async function (context, req) {
  const date = "2022-06-19T05:12:16.067Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

