module.exports = async function (context, req) {
  const date = "2023-07-04T08:13:32.329Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

