module.exports = async function (context, req) {
  const date = "2023-10-18T01:44:06.626Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

