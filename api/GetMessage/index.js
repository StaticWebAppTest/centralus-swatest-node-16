module.exports = async function (context, req) {
  const date = "2023-08-08T08:11:30.329Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

