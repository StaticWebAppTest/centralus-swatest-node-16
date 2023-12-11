module.exports = async function (context, req) {
  const date = "2023-12-11T01:53:03.955Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

