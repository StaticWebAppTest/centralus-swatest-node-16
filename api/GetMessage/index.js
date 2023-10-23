module.exports = async function (context, req) {
  const date = "2023-10-23T01:44:04.359Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

