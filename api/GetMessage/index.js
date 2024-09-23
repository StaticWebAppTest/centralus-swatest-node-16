module.exports = async function (context, req) {
  const date = "2024-09-23T07:11:42.205Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

