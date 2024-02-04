module.exports = async function (context, req) {
  const date = "2024-02-04T01:46:44.385Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

