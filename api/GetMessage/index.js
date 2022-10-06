module.exports = async function (context, req) {
  const date = "2022-10-06T08:17:11.067Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

